<?php

class DirectoryFilter 
{

    public function getFiles($directory, $ext)
    {

        return array_filter(
            scandir($directory),
            function ($file) use ($ext) {
               return pathinfo($file, PATHINFO_EXTENSION) === $ext;
            }
        );

    }

}