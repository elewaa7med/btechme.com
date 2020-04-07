<!DOCTYPE html>
<html>
    <head>
        <title>Arabic Converter</title>
    </head>
    <body>
        <?php
            echo "Start Converting";
            exec('ArabicConverter.exe', $response);
            print_r($response);
            echo "End Converting";
        ?>
    </body>
    
</html>