package com.example.Boot.model;

public class InputFile {
    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public InputFile(){

    }

    public InputFile(String fileName) {
        this.fileName = fileName;
    }

    private String fileName;

}
