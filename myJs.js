
function checkButton() {
    var getSelectedValue = document.querySelector( 
                'input[name="chart"]:checked'); 
    
    
    
    
    switch (getSelectedValue.value) {
        case "1": chart1.style.display = 'inline'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "2": chart1.style.display = 'none'; chart2.style.display = 'inline'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "3": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'inline'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "4": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'inline'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "51": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'inline'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "52": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'inline'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "6": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'inline'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "7": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'inline'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "8": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'inline'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "9": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'inline'; chart10.style.display = 'none'; chart11.style.display = 'none'; 
            break;
        case "10": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'inline'; chart11.style.display = 'none'; 
            break;
        case "11": chart1.style.display = 'none'; chart2.style.display = 'none'; chart3.style.display = 'none'; chart4.style.display = 'none'; chart51.style.display = 'none'; chart52.style.display = 'none'; chart6.style.display = 'none'; chart7.style.display = 'none'; chart8.style.display = 'none'; chart9.style.display = 'none'; chart10.style.display = 'none'; chart11.style.display = 'inline'; 
            break;
        default: 
    }
    
    switch (getSelectedValue.value) {
        case "1": document.getElementById("AIcommentary").textContent="Optimism and Caution: While most respondents are optimistic about AI’s potential to drive progress, there is also caution regarding its societal impacts. The concerns about job loss and uncertainty highlight the need for careful consideration of AI’s broader effects on the workforce and society. Efficiency and Utility: The emphasis on AI’s usefulness and efficiency suggests that many see its value in enhancing productivity and optimizing processes. However, the fact that only a small percentage specifically cited efficiency indicates that while important, it may not be the primary focus for most respondents. Mixed Perceptions: The small but notable minority that is unsure or views AI as non-progressive indicates that there is still some scepticism and ambivalence about AI's role in society. This suggests a need for ongoing dialogue and education about AI’s potential benefits and risks."; document.getElementById("Humancommentary").textContent="Overall many of the responses tend to see AI developent as progressive due to it's fast paced advancement and due to the fact that it could be useful for society and that further development could lead to more efficient processes. However, some responses do consider the problem of potential job loss due to AI replacing people as it becomes more efficient."
            break;
        case "2": document.getElementById("AIcommentary").textContent="Optimism and Caution: While most respondents are optimistic about AI’s potential to drive progress, there is also caution regarding its societal impacts. The concerns about job loss and uncertainty highlight the need for careful consideration of AI’s broader effects on the workforce and society. Efficiency and Utility: The emphasis on AI’s usefulness and efficiency suggests that many see its value in enhancing productivity and optimizing processes. However, the fact that only a small percentage specifically cited efficiency indicates that while important, it may not be the primary focus for most respondents. Mixed Perceptions: The small but notable minority that is unsure or views AI as non-progressive indicates that there is still some scepticism and ambivalence about AI's role in society. This suggests a need for ongoing dialogue and education about AI’s potential benefits and risks."; document.getElementById("Humancommentary").textContent="Overall many of the responses tend to see AI developent as progressive due to it's fast paced advancement and due to the fact that it could be useful for society and that further development could lead to more efficient processes. However, some responses do consider the problem of potential job loss due to AI replacing people as it becomes more efficient."
            break;
        case "3": document.getElementById("AIcommentary").textContent="Infrequent Users: 12% have never used AI, 23% use it rarely, and another 12% use it sometimes. This indicates that a significant portion of people either have minimal or occasional interaction with AI tools. Moderate Users: 15% use AI tools fairly often, and 23% use them often. This reflects a regular engagement pattern among a considerable segment of respondents. Frequent Users: 8% use AI tools very often, and another 8% use them daily, indicating that a smaller portion of respondents engage with AI tools on a frequent or daily basis.  Many responses consider AI to be useful, as it can save time and could be incredibly important in the future, however many of these same responses carry a sense of caution about them."; document.getElementById("Humancommentary").textContent="Many of the responses hadn't used it ever, or only use it once every few months with 46% using it less than or equal to once per month. This alongside the high quantity (54%) of people who use it at least once per week shows the stark difference between students and people who use AI being more likely to reuse and continue using AI tools. Alongside this, there's the 50% of responses who use AI tools daily being students shows an alarming number of students who could potentially be using AI to complete their taskwork."
            break;
        case "4": document.getElementById("AIcommentary").textContent="Positive Views: A majority of respondents view technology as both \"good for education\" and a \"convenience,\" suggesting that it is broadly seen as beneficial and making educational processes more manageable. Nearly half also find technology \"helpful,\" reflecting a significant positive impact on learning. Negative Views: A smaller portion of respondents believe technology is \"bad for education,\" indicating some concerns about its impact. Initial Assessment: A small percentage view technology as \"good to start,\" suggesting that while they acknowledge its benefits initially, they might have concerns about its sustained effectiveness."; document.getElementById("Humancommentary").textContent="Many of the responses shared the opinion that technology is good for education due to the convenience it provides, allowing for students to study more effectively when they utilise the internet and other resources. However there are some responses that were on the fence or against using technology in education due to being a distraction or allowing for students to create work without understanding the content itself. Overall responses tend to see technology in education as beneficial"
            break;
        case "51": document.getElementById("AIcommentary").textContent="Positive Views: A majority of respondents view technology as both \"good for education\" and a \"convenience,\" suggesting that it is broadly seen as beneficial and making educational processes more manageable. Nearly half also find technology \"helpful,\" reflecting a significant positive impact on learning. Negative Views: A smaller portion of respondents believe technology is \"bad for education,\" indicating some concerns about its impact. Initial Assessment: A small percentage view technology as \"good to start,\" suggesting that while they acknowledge its benefits initially, they might have concerns about its sustained effectiveness."; document.getElementById("Humancommentary").textContent="Many of the responses shared the opinion that technology is good for education due to the convenience it provides, allowing for students to study more effectively when they utilise the internet and other resources. However there are some responses that were on the fence or against using technology in education due to being a distraction or allowing for students to create work without understanding the content itself. Overall responses tend to see technology in education as beneficial"
            break;
        case "52": document.getElementById("AIcommentary").textContent="Concerns About Negative Impact: The predominant concerns are about cheating (57%) and a lack of genuine learning (40%). These indicate a strong worry that AI might undermine academic integrity and hinder the educational process. Accuracy and Engagement Issues: Concerns about incorrect information (23%) and reduced engagement (36%) reflect worries about the reliability and effectiveness of AI in maintaining student involvement. Plagiarism and Conditional Views: There are also concerns about plagiarism (15%) and conditional views (26%) suggesting that the impact of AI could vary based on its implementation. Recognition of Potential Benefits: Despite the concerns, a small portion of respondents (11%) still sees AI as potentially useful, suggesting that some believe it can offer benefits if used appropriately."; document.getElementById("Humancommentary").textContent="The AI response here is very accurate to the general interpretations of a majority of the responses. However it doesn't consider that the responses mentioning how it could still be useful were typically also the ones mentioning how AI could undermine academic integrity and learning"
            break;
        case "6": document.getElementById("AIcommentary").textContent="Positive Views: The most common view is that AI is a \"useful tool,\" with some additional support for it being \"good\" or \"important.\" Negative or Cautious Views: There are also significant concerns about AI, with some respondents seeing it as \"potentially dangerou\" and a smaller number seeing it as \"dangerous\" or \"bad.\" Uncertainty: A considerable number of respondents are \"unsure,\" indicating that there is still a lot of ambivalence or a lack of clarity regarding AI."; document.getElementById("Humancommentary").textContent="Many responses consider AI to be useful, as it can save time and could be incredible important in the future, however many of these same responses carry a sense of caution about them."
            break;
        case "7": document.getElementById("AIcommentary").textContent="Positive Views: The most common view is that AI is a \"useful tool,\" with some additional support for it being \"good\" or \"important.\" Negative or Cautious Views: There are also significant concerns about AI, with some respondents seeing it as \"potentially dangerous\" and a smaller number seeing it as \"dangerous\" or \"bad.\" Uncertainty: A considerable number of respondents are \"unsure,\" indicating that there is still a lot of ambivalence or a lack of clarity regarding AI."; document.getElementById("Humancommentary").textContent="Many responses consider AI to be useful, as it can save time and could be incredible important in the future, however many of these same responses carry a sense of caution about them."
            break;
        case "8": document.getElementById("AIcommentary").textContent="Highly Valued Technologies: Computers are the most universally acknowledged as useful in schools, followed by educational software and websites. These technologies are seen as crucial tools for enhancing learning and educational activities. Moderately Valued Technologies: Phones/iPads and AI have notable but smaller levels of recognition, indicating they are seen as useful by a segment of respondents but not as universally essential as computers. Less Prominent Technologies: Digital whiteboards have the lowest recognition among the listed technologies, suggesting they are less frequently utilized or valued in the context of education. Concerns and Other Technologies: There is a small percentage who believe technology can be bad, reflecting some concerns about its use. Additionally, \"other tech\" is noted by a fraction of respondents, indicating that there are other valuable technologies not explicitly listed."; document.getElementById("Humancommentary").textContent="Whilst some devices were listed more often than others this was partly due to certain responses having less written about them. Also responses regarding software or websites almost always had mention of computers/devices similar to that. It should also be noted that some answers had no particular mention of any of the above types of tech and were catagorised based on vague wording and interpretation. The AI response here was accurate in terms of the rest."
            break;
        case "9": document.getElementById("AIcommentary").textContent="Concerns About Negative Impact: The predominant concerns are about cheating (57%) and a lack of genuine learning (40%). These indicate a strong worry that AI might undermine academic integrity and hinder the educational process. Accuracy and Engagement Issues: Concerns about incorrect information (23%) and reduced engagement (36%) reflect worries about the reliability and effectiveness of AI in maintaining student involvement. Plagiarism and Conditional Views: There are also concerns about plagiarism (15%) and conditional views (26%) suggesting that the impact of AI could vary based on its implementation. Recognition of Potential Benefits: Despite the concerns, a small portion of respondents (11%) still sees AI as potentially useful, suggesting that some believe it can offer benefits if used appropriately."; document.getElementById("Humancommentary").textContent="The AI response here is very accurate to the general interpretations of a majority of the responses. However it doesn't consider that the responses mentioning how it could still be useful were typically also the ones mentioning how AI could undermine academic integrity and learning"
            break;
        case "10": document.getElementById("AIcommentary").textContent="General Acceptance vs. Ethical Concerns: While a majority find the use of AI morally acceptable (64%), there are significant concerns about its impact, with over half of the respondents (53%) thinking it could be bad, and 40% considering it cheating. Specific Issues: Specific concerns include plagiarism (15%), cheating (40%), and incorrect results (9%). Additionally, 19% worry that AI usage might hinder learning. Nuanced Views: A smaller group (11%) acknowledges that AI usage is morally acceptable but still sees it as problematic, reflecting a recognition of potential issues despite an acceptance of its use."; document.getElementById("Humancommentary").textContent="General Acceptance vs. Ethical Concerns: While a majority find the use of AI morally acceptable (64%), there are significant concerns about its impact, with over half of the respondents (53%) thinking it could be bad, and 40% considering it cheating. Specific Issues: Specific concerns include plagiarism (15%), cheating (40%), and incorrect results (9%). Additionally, 19% worry that AI usage might hinder learning. Nuanced Views: A smaller group (11%) acknowledges that AI usage is morally acceptable but still sees it as problematic, reflecting a recognition of potential issues despite an acceptance of its use."
            break;
        case "11": document.getElementById("AIcommentary").textContent="Majority Acceptance: The data shows a general acceptance of AI in education, particularly in creating materials, but with significant concerns about the quality and ethical implications. Conditional Acceptance: Many respondents accept AI's role if paired with teacher oversight, indicating that trust in AI's capabilities alone is not universal. Diverse Opinions: The spread of opinions reflects a nuanced debate, with concerns about quality, ethics, and the role of the teacher in an AI-assisted educational environment."; document.getElementById("Humancommentary").textContent="The responses tend to lean more in accepting the usage of AI by teachers given that they at least edit or check the work to ensure no errors as there's a reasonable chance of the taskwork either being subpar or containing material that's incorrect. Alongside this there's worries about whether the teacher would actually partake in teaching if they don't know what has been made or if they over rely on AI works."
            break;
        default: 
    }
    
    typing1()
    typing2()
    
    
    
}



function typing1() {

var children = document.getElementById("Hiders1").children;
for (let i = 0; i < children.length; i++) {
  if( children[i].style.animationName == "typing" ){
  children[i].style.animationName = "typing2";
} else {
  children[i].style.animationName = "typing";
}
}

}

function typing2() {

var children = document.getElementById("Hiders2").children;
for (let i = 0; i < children.length; i++) {
  if( children[i].style.animationName == "typing" ){
  children[i].style.animationName = "typing2";
} else {
  children[i].style.animationName = "typing";
}
}

}








