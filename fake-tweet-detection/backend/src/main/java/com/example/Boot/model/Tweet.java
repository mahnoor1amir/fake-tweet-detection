package com.example.Boot.model;

public class Tweet {
    public String getHandle() {
        return handle;
    }

    public void setHandle(String handle) {
        this.handle = handle;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTweetBody() {
        return tweetBody;
    }

    public void setTweetBody(String tweetBody) {
        this.tweetBody = tweetBody;
    }

    public Tweet(){

    }

    public Tweet(String handle, String date, String tweetBody) {
        this.handle = handle;
        this.date = date;
        this.tweetBody = tweetBody;
    }

    private String handle;
    private String date;
    private String tweetBody;

}
