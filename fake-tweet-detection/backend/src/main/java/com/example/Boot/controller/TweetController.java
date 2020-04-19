package com.example.Boot.controller;

import com.example.Boot.model.InputFile;
import com.example.Boot.service.OCR;
import com.example.Boot.model.Tweet;
import com.example.Boot.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TweetController {

    String file;
    String handle;
    String date;
    String tweetBody;
    String data[];

    @Autowired
    private TweetService tweetService;

    @RequestMapping("/file")
    public List<InputFile> getFiles(){
        return tweetService.getFile();
    }

    @RequestMapping("/file/info")
    public List<Tweet> getTweet(){
        return tweetService.getTweet();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/file")
    public List<Tweet> parse(@RequestBody InputFile input){
        //emptying the list
        tweetService.deleteALL();
        file = input.getFileName();
        data = OCR.run(file);
        date = data[2];
        tweetBody = data[1];
        handle = data[0];
        Tweet tweet = new Tweet(handle, date, tweetBody);
        tweetService.addTweet(tweet);
        return tweetService.getTweet();
    }

}
