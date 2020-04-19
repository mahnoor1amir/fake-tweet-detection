package com.example.Boot.service;

import com.example.Boot.model.InputFile;
import com.example.Boot.model.Tweet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TweetService {

    private List<Tweet> tweets = new ArrayList<>(Arrays.asList());

    private List<InputFile> files = new ArrayList<>(Arrays.asList());

    public List<InputFile> getFile(){
        return files;
    }

    public void addFile(InputFile iFile){
        files.add(iFile);
    }

    public void addTweet(Tweet tweet){
        tweets.add(tweet);
    }

    public List<Tweet> getTweet(){
        return tweets;
    }

    public void deleteALL(){
        tweets.removeAll(tweets);
    }

}
