prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
height:400,
image_format:"png",
png_quality:90
})

camera= document.getElementById("camera");
Webcam.attach("#camera");

 function capture_snapshot(){

    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img src='"+data_uri+"' id='snapshot'>";

    })

 }


 console.log("ml5 version" , ml5.version);

 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pW_Bd8WYC/model.json",modelLoaded)

 function modelLoaded(){
console.log("model loaded");


 }


 function speak(){
synth = window.speechSynthesis;
speak_data = "The first prediction is "+ prediction_1 + "The second prediction is " + prediction_2;
utter_this = new SpeechSynthesisUtterance(speak_data);
synth.speak(utter_this)



 }



function predict_emotion(){
img = document.getElementById("snapshot");
classifier.classify(img,gotResults)




}


function gotResults(error,result){

    if(error){
        console.log(error);

    }
    else{
console.log(result);
prediction_1 = result[0].label;
prediction_2 = result[1].label;

document.getElementById("result_emotion_name").innerHTML=prediction_1;
document.getElementById("result_emotion_name2").innerHTML=prediction_2;
speak();

if (prediction_1 == "Happy"){
   document.getElementById("emoji_img").innerHTML = "&#128522;" 

} 

if (prediction_1 == "Sad"){
    document.getElementById("emoji_img").innerHTML = "&#128546;" 
 
 } 

 if (prediction_1 == "Angry"){
    document.getElementById("emoji_img").innerHTML = "&#128548;" 
 
 } 

 if (prediction_2 == "Happy"){
    document.getElementById("emoji_img2").innerHTML = "&#128522;" 
 
 } 
 
 if (prediction_2 == "Sad"){
     document.getElementById("emoji_img2").innerHTML = "&#128546;" 
  
  } 
 
  if (prediction_2 == "Angry"){
     document.getElementById("emoji_img2").innerHTML = "&#128548;" 
  
  } 


    }

}