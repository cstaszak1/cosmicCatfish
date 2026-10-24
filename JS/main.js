fetch("data/planets.json")
    .then(res => res.json())
    .then(data=>{
        console.log(data);
        const planets = data.planetInformation;
        let html="";

        for(const key in planets){
            const planet = planets[key];
            html += "<h2>" + planet.name + "</h2>";

            for(const item in planet.data){
                const value = planet.data[item]

                if(item == "atmosphere"){
                    let gases = "";
                    for(const element in value){
                        gases += element + " " + value[element] + "%, ";
                    }
                    html += "<p>atmosphere: " + gases + "</p>";
                }else{
                    html += "<p>" + item + ":" + value + "</p>"
                }
            }

        }
document.getElementById("output").innerHTML = html;
    });

