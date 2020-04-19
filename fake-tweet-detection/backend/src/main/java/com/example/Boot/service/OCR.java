package com.example.Boot.service;

import java.io.File;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.FileEntity;

public class OCR {

    static String subscriptionKey = ("b115c3a1e3034f42b30936bf3a0d7843");
    static String endpoint = "https://499.cognitiveservices.azure.com/";
    private static String[] object;
    private static String type;

    private static final String uriBase = endpoint +
            "vision/v2.1/ocr";

    public static String[] run(String fileName) {
        final CloseableHttpClient httpClient = HttpClientBuilder.create().build();

        try {
            final URIBuilder uriBuilder = new URIBuilder(uriBase);

            uriBuilder.setParameter("language", "unk");
            uriBuilder.setParameter("detectOrientation", "true");


            // Request parameters.
            final URI uri = uriBuilder.build();
            final HttpPost request = new HttpPost(uri);

            // Request headers.
            request.setHeader("Content-Type", "application/octet-stream");
            request.setHeader("Ocp-Apim-Subscription-Key", subscriptionKey);

            File file = new File(fileName);
            FileEntity reqEntityF =
                    new FileEntity(file, ContentType.APPLICATION_OCTET_STREAM);

            request.setEntity(reqEntityF);

            HttpResponse response = httpClient.execute(request);
            HttpEntity entity = response.getEntity();

            if (entity != null) {
                // Format and display the JSON response.
                final String jsonString = EntityUtils.toString(entity);
                final JSONObject json = new JSONObject(jsonString);

                object = parse(json.toString(2));
                

            } else {
                return null;
            }

        } catch (final Exception e) {
            // Display error message.
            System.out.println(e.getMessage());
        }
        return object;
    }



    public static String[] parse (String responseBody) {

        Pattern usernamePattern = Pattern.compile("^[@][a-zA-Z0-9]*$");
        //Format: 11 AM - 22 Dec 2016
        Pattern datePattern1 = Pattern.compile("^[0-9]{2}[\\s]([AaPp][Mm])[\\s][-][\\s][0-9]{2}[\\s]([aA-zZ]{3})[\\s][0-9]{4}");
        //Format: 17:17 PM - 22 Apr 2018
        Pattern datePattern2 = Pattern.compile("[0-9]*[:][0-9]*.([AaPp][Mm]).[-].[0-9]*.[aA-zZ]{3}.[0-9]{4}");
        //Format: 7:59 AM • Aug 23, 2019
        Pattern datePattern3 = Pattern.compile(".*[0-9][:][0-9]{2}.([AaPP][Mm])...[aA-zZ]{3}.[0-9]*[,].[0-9]{4}");
        //Format: 11:59 AM • 12/24/15
        Pattern datePattern4 = Pattern.compile("[0-9]*[:][0-9]{2}.([AaPP][Mm])...[0-9]*[/][0-9]*[/][0-9]*");
        //Format: 8/29/17, 10:19 PM
        Pattern datePattern5 = Pattern.compile("[0-9]*[/][0-9]*[/][0-9]{2}[,].[0-9]*[:][0-9]*.([AaPp][Mm])");

        String delim = " ";
        String author = "";
        String date = "";
        String fullDateLine = "";
        String dateLineDiff = "";
        boolean dateFound = false;
        boolean userFound = false;

        List<String> body = new ArrayList<String>();
        JSONObject json = new JSONObject(responseBody);
        JSONArray regions = json.getJSONArray("regions");

        int regionCount = regions.length();
        int tweeterIndex = 0;
        int dateIndex = 0;
        int twitterFor;

        for(int x = 0; x < regionCount; x++) {
            JSONObject region = regions.optJSONObject(x);
            JSONArray lines = region.getJSONArray("lines");
            int lineCount = lines.length();
            for(int l = 0; l < lineCount; l++) {
                JSONObject line = lines.getJSONObject(l);
                JSONArray words = line.getJSONArray("words");
                List<String> wordList = new ArrayList<String>();

                for(int i = 0; i < words.length(); i++) {
                    wordList.add(words.getJSONObject(i).getString("text"));
                    body.add(words.getJSONObject(i).getString("text"));
                    String joinedText = wordList.stream()
                            .map(Object::toString)
                            .collect(Collectors.joining(delim));

                    Matcher usernameMatch = usernamePattern.matcher(joinedText);
                    Matcher dateMatch1 = datePattern1.matcher(joinedText);
                    Matcher dateMatch2 = datePattern2.matcher(joinedText);
                    Matcher dateMatch3 = datePattern3.matcher(joinedText);
                    Matcher dateMatch4 = datePattern4.matcher(joinedText);
                    Matcher dateMatch5 = datePattern5.matcher(joinedText);

                    //if the username is detected then author is set to its value
                    if(usernameMatch.find()) {
                        author = joinedText;
                        tweeterIndex = body.size();
                        userFound = true;
                    }

                    //if the tweet date is detected then date is set to its value
                    if(dateMatch1.find()) {
                        //Assigning the entire line of text parsed to string fullDateLine
                        fullDateLine = joinedText;
                        dateIndex = body.size();
                        //setting date = to only what matches the pattern not the entire line
                        date = dateMatch1.group();
                        //setting date found to true
                        dateFound = true;
                    }

                    if(dateMatch2.find()) {
                        fullDateLine = joinedText;
                        dateIndex = body.size();
                        date = dateMatch2.group();
                        dateFound = true;
                    }

                    if(dateMatch3.find()) {
                        fullDateLine = joinedText;
                        dateIndex = body.size();
                        date = dateMatch3.group();
                        dateFound = true;
                    }

                    if(dateMatch4.find()) {
                        fullDateLine = joinedText;
                        dateIndex = body.size();
                        date = dateMatch4.group();
                        dateFound = true;
                    }

                    if(dateMatch5.find()) {
                        fullDateLine = joinedText;
                        dateIndex = body.size();
                        date = dateMatch5.group();
                        dateFound = true;
                    }

                    //If the OCR detects text "follow" from follow button
                    if(joinedText.equalsIgnoreCase("follow")) {
                        //removes the text from the follow button from the list
                        body.remove(joinedText);
                    }
                }
            }
        }

        if (date.length() > fullDateLine.length()) {
            dateLineDiff = date.substring(fullDateLine.length());
            String[] dateLineDiffArr = dateLineDiff.split("\\s+");
            twitterFor = dateLineDiffArr.length-1;
        } else if (fullDateLine.length() > date.length()) {
            dateLineDiff = fullDateLine.substring(date.length());
            String[] dateLineDiffArr = dateLineDiff.split("\\s+");
            twitterFor = dateLineDiffArr.length-1;
        } else {
            twitterFor = 0;
        }

        //putting the date into an array
        String[] dateArray = date.split("\\s+");
        int bodyLength = body.size();
        int dateWordCount = dateArray.length;

        //difference between the last index of the list and the index of where date is located
        int indexDif = (bodyLength - dateIndex) + 1;

        if(dateFound) {
            //removing the last element of the list until the date is removed from the list
            for(int i = 1; i < indexDif + dateWordCount + twitterFor; i++) {
                body.remove(bodyLength-i);
            }
        }
        else {
            return null;
        }

        if(body.contains(author)) {
            //removes the first element of the list until the author element is removed
            for(int x = tweeterIndex-1; x >= 0; x--) {
                body.remove(x);
            }
        }
        else {
            return null;
        }

        //assigning the remaining list (tweet body) to a string separated by a space
        String tweetBody = body.stream()
                .map(Object::toString)
                .collect(Collectors.joining(delim));

        String [] tweet = {author, tweetBody, date};

        if(userFound && dateFound) {
            return tweet;
        }
        else {
            return null;
        }

//        if(userFound && dateFound) {
//            if (tweetObject.equalsIgnoreCase("handle")) {
//                return author;
//            } else if (tweetObject.equalsIgnoreCase("date")) {
//                return date;
//            } else if (tweetObject.equalsIgnoreCase("tweetBody")) {
//                return tweetBody;
//            } else {
//                return null;
//            }
//        }
//        else{
//            return null;
//        }
    }
}
