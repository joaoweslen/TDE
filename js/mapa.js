                var map_d8890ece366fc81bf6bdf590db40e3a6 = L.map(
                "map_d8890ece366fc81bf6bdf590db40e3a6",
                {
                    center: [-14.235, -51.9253],
                    crs: L.CRS.EPSG3857,
                    zoom: 4,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );


            var tile_layer_838734be533817822bd665dac95b9d78 = L.tileLayer(
                "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
                {"attribution": "\u0026copy; \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca target=\"_blank\" href=\"http://cartodb.com/attributions\"\u003eCartoDB\u003c/a\u003e, CartoDB \u003ca target=\"_blank\" href =\"http://cartodb.com/attributions\"\u003eattributions\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var choropleth_76b9524f386c6c3388e5dacf419a6f19 = L.featureGroup(
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
        function geo_json_83c6f2e21d3a625ae42ed2800fff6845_styler(feature) {
            switch(feature.properties.UF_05) {
                case "AL": case "AM": case "BA": case "CE": case "ES": case "MA": case "RN": case "SE": case "SP": 
                    return {"color": "black", "fillColor": "#edf8fb", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                case "RJ": 
                    return {"color": "black", "fillColor": "#006d2c", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
                default:
                    return {"color": "black", "fillColor": "black", "fillOpacity": 0.7, "opacity": 0.5, "weight": 1};
            }
        }
        function geo_json_83c6f2e21d3a625ae42ed2800fff6845_highlighter(feature) {
            switch(feature.properties.UF_05) {
                default:
                    return {"fillOpacity": 0.8999999999999999, "weight": 3};
            }
        }

        function geo_json_83c6f2e21d3a625ae42ed2800fff6845_onEachFeature(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        geo_json_83c6f2e21d3a625ae42ed2800fff6845.resetStyle(e.target);
                    }
                },
                mouseover: function(e) {
                    if(typeof e.target.setStyle === "function"){
                        const highlightStyle = geo_json_83c6f2e21d3a625ae42ed2800fff6845_highlighter(e.target.feature)
                        e.target.setStyle(highlightStyle);
                    }
                },
            });
        };
        var geo_json_83c6f2e21d3a625ae42ed2800fff6845 = L.geoJson(null, {
                onEachFeature: geo_json_83c6f2e21d3a625ae42ed2800fff6845_onEachFeature,
            
                style: geo_json_83c6f2e21d3a625ae42ed2800fff6845_styler,
        });

        function geo_json_83c6f2e21d3a625ae42ed2800fff6845_add (data) {
            geo_json_83c6f2e21d3a625ae42ed2800fff6845
                .addData(data)
                .addTo(choropleth_76b9524f386c6c3388e5dacf419a6f19);
        }

        
    
    var color_map_e9785480c66b8b9d09623ef3d95fc079 = {};

    
    color_map_e9785480c66b8b9d09623ef3d95fc079.color = d3.scale.threshold()
              .domain([6814.6212, 958643.1722420842, 1910471.7232841682, 2862300.2743262523, 3814128.8253683364, 4765957.376410421, 5717785.927452505, 6669614.478494589, 7621443.029536673, 8573271.580578757, 9525100.131620843, 10476928.682662927, 11428757.23370501, 12380585.784747094, 13332414.33578918, 14284242.886831261, 15236071.437873347, 16187899.98891543, 17139728.539957512, 18091557.0909996, 19043385.642041683, 19995214.193083763, 20947042.74412585, 21898871.295167934, 22850699.846210018, 23802528.3972521, 24754356.948294185, 25706185.49933627, 26658014.050378356, 27609842.60142044, 28561671.15246252, 29513499.703504607, 30465328.25454669, 31417156.805588774, 32368985.356630858, 33320813.90767294, 34272642.45871503, 35224471.00975712, 36176299.560799204, 37128128.111841284, 38079956.66288337, 39031785.21392545, 39983613.76496753, 40935442.31600962, 41887270.867051706, 42839099.418093786, 43790927.96913587, 44742756.52017796, 45694585.07122004, 46646413.62226213, 47598242.17330421, 48550070.72434629, 49501899.275388375, 50453727.82643046, 51405556.37747254, 52357384.92851463, 53309213.47955672, 54261042.0305988, 55212870.581640884, 56164699.132682964, 57116527.683725044, 58068356.23476713, 59020184.78580922, 59972013.3368513, 60923841.887893386, 61875670.43893547, 62827498.98997755, 63779327.54101964, 64731156.09206172, 65682984.6431038, 66634813.19414589, 67586641.74518797, 68538470.29623005, 69490298.84727213, 70442127.39831422, 71393955.9493563, 72345784.5003984, 73297613.05144046, 74249441.60248256, 75201270.15352464, 76153098.70456673, 77104927.25560881, 78056755.80665089, 79008584.35769297, 79960412.90873505, 80912241.45977715, 81864070.01081923, 82815898.56186132, 83767727.1129034, 84719555.66394548, 85671384.21498756, 86623212.76602964, 87575041.31707174, 88526869.86811382, 89478698.41915591, 90430526.97019798, 91382355.52124007, 92334184.07228215, 93286012.62332425, 94237841.17436633, 95189669.7254084, 96141498.27645048, 97093326.82749256, 98045155.37853466, 98996983.92957674, 99948812.48061883, 100900641.03166091, 101852469.582703, 102804298.13374507, 103756126.68478715, 104707955.23582925, 105659783.78687133, 106611612.33791342, 107563440.88895549, 108515269.43999758, 109467097.99103966, 110418926.54208176, 111370755.09312384, 112322583.64416592, 113274412.195208, 114226240.74625008, 115178069.29729217, 116129897.84833425, 117081726.39937635, 118033554.95041843, 118985383.50146051, 119937212.05250259, 120889040.60354467, 121840869.15458676, 122792697.70562884, 123744526.25667094, 124696354.80771302, 125648183.3587551, 126600011.90979718, 127551840.46083927, 128503669.01188135, 129455497.56292343, 130407326.11396553, 131359154.66500759, 132310983.21604969, 133262811.76709177, 134214640.31813386, 135166468.86917594, 136118297.42021802, 137070125.9712601, 138021954.52230218, 138973783.07334426, 139925611.62438637, 140877440.17542845, 141829268.72647053, 142781097.2775126, 143732925.82855472, 144684754.3795968, 145636582.93063885, 146588411.48168093, 147540240.032723, 148492068.58376512, 149443897.1348072, 150395725.68584928, 151347554.23689136, 152299382.78793347, 153251211.33897555, 154203039.89001763, 155154868.4410597, 156106696.9921018, 157058525.54314387, 158010354.09418595, 158962182.64522803, 159914011.1962701, 160865839.74731222, 161817668.2983543, 162769496.84939638, 163721325.40043846, 164673153.95148054, 165624982.50252265, 166576811.05356473, 167528639.6046068, 168480468.15564886, 169432296.70669097, 170384125.25773305, 171335953.80877513, 172287782.3598172, 173239610.9108593, 174191439.4619014, 175143268.01294348, 176095096.56398556, 177046925.11502764, 177998753.66606975, 178950582.21711183, 179902410.76815388, 180854239.31919596, 181806067.87023804, 182757896.42128015, 183709724.97232223, 184661553.5233643, 185613382.0744064, 186565210.6254485, 187517039.17649058, 188468867.72753266, 189420696.27857473, 190372524.8296168, 191324353.38065892, 192276181.93170097, 193228010.48274305, 194179839.03378513, 195131667.58482724, 196083496.13586932, 197035324.6869114, 197987153.23795348, 198938981.78899556, 199890810.34003767, 200842638.89107975, 201794467.44212183, 202746295.9931639, 203698124.544206, 204649953.09524807, 205601781.64629015, 206553610.19733223, 207505438.7483743, 208457267.29941642, 209409095.8504585, 210360924.40150058, 211312752.95254266, 212264581.50358477, 213216410.05462685, 214168238.60566893, 215120067.15671098, 216071895.70775306, 217023724.25879517, 217975552.80983725, 218927381.36087933, 219879209.9119214, 220831038.46296352, 221782867.0140056, 222734695.56504768, 223686524.11608976, 224638352.66713184, 225590181.21817395, 226542009.769216, 227493838.32025808, 228445666.87130016, 229397495.42234227, 230349323.97338435, 231301152.52442643, 232252981.0754685, 233204809.6265106, 234156638.1775527, 235108466.72859478, 236060295.27963686, 237012123.83067894, 237963952.38172102, 238915780.9327631, 239867609.48380518, 240819438.03484726, 241771266.58588934, 242723095.13693145, 243674923.68797353, 244626752.2390156, 245578580.7900577, 246530409.3410998, 247482237.89214188, 248434066.44318396, 249385894.99422604, 250337723.5452681, 251289552.0963102, 252241380.64735228, 253193209.19839436, 254145037.74943644, 255096866.30047855, 256048694.85152063, 257000523.4025627, 257952351.9536048, 258904180.50464687, 259856009.05568898, 260807837.60673106, 261759666.1577731, 262711494.7088152, 263663323.2598573, 264615151.81089938, 265566980.36194146, 266518808.91298354, 267470637.46402562, 268422466.01506773, 269374294.56610984, 270326123.1171519, 271277951.668194, 272229780.2192361, 273181608.77027816, 274133437.32132024, 275085265.8723623, 276037094.4234044, 276988922.9744465, 277940751.52548856, 278892580.0765307, 279844408.6275728, 280796237.17861485, 281748065.72965693, 282699894.280699, 283651722.8317411, 284603551.3827832, 285555379.93382525, 286507208.48486733, 287459037.0359095, 288410865.58695155, 289362694.13799363, 290314522.68903565, 291266351.24007773, 292218179.7911198, 293170008.3421619, 294121836.893204, 295073665.44424605, 296025493.9952882, 296977322.5463303, 297929151.09737235, 298880979.64841443, 299832808.1994565, 300784636.7504986, 301736465.3015407, 302688293.85258275, 303640122.40362483, 304591950.954667, 305543779.50570905, 306495608.05675113, 307447436.6077932, 308399265.1588353, 309351093.7098774, 310302922.26091945, 311254750.81196153, 312206579.3630036, 313158407.91404575, 314110236.4650878, 315062065.01612985, 316013893.56717193, 316965722.118214, 317917550.6692561, 318869379.2202982, 319821207.77134025, 320773036.32238233, 321724864.8734245, 322676693.42446655, 323628521.97550863, 324580350.5265507, 325532179.0775928, 326484007.62863487, 327435836.17967695, 328387664.73071903, 329339493.2817611, 330291321.83280325, 331243150.3838453, 332194978.9348874, 333146807.4859295, 334098636.03697157, 335050464.58801365, 336002293.1390557, 336954121.69009775, 337905950.2411398, 338857778.79218197, 339809607.34322405, 340761435.8942661, 341713264.4453082, 342665092.9963503, 343616921.54739237, 344568750.09843445, 345520578.6494765, 346472407.2005186, 347424235.75156075, 348376064.3026028, 349327892.8536449, 350279721.404687, 351231549.95572907, 352183378.50677115, 353135207.0578132, 354087035.6088553, 355038864.1598974, 355990692.7109395, 356942521.2619816, 357894349.8130237, 358846178.36406577, 359798006.9151078, 360749835.46614987, 361701664.01719195, 362653492.568234, 363605321.1192761, 364557149.67031825, 365508978.2213603, 366460806.7724024, 367412635.3234445, 368364463.87448657, 369316292.42552865, 370268120.9765707, 371219949.5276128, 372171778.0786549, 373123606.629697, 374075435.1807391, 375027263.7317812, 375979092.28282326, 376930920.83386534, 377882749.3849074, 378834577.9359495, 379786406.4869916, 380738235.03803366, 381690063.5890758, 382641892.1401179, 383593720.6911599, 384545549.242202, 385497377.79324406, 386449206.34428614, 387401034.8953282, 388352863.4463703, 389304691.9974124, 390256520.5484545, 391208349.0994966, 392160177.6505387, 393112006.20158076, 394063834.75262284, 395015663.3036649, 395967491.854707, 396919320.4057491, 397871148.95679116, 398822977.5078333, 399774806.0588754, 400726634.60991746, 401678463.16095954, 402630291.7120016, 403582120.2630437, 404533948.8140858, 405485777.36512786, 406437605.9161699, 407389434.467212, 408341263.0182541, 409293091.5692962, 410244920.12033826, 411196748.67138034, 412148577.2224224, 413100405.7734645, 414052234.3245066, 415004062.87554866, 415955891.4265908, 416907719.9776329, 417859548.52867496, 418811377.07971704, 419763205.6307591, 420715034.1818012, 421666862.7328433, 422618691.28388536, 423570519.83492744, 424522348.3859696, 425474176.93701166, 426426005.48805374, 427377834.0390958, 428329662.5901379, 429281491.14118, 430233319.692222, 431185148.2432641, 432136976.79430616, 433088805.3453483, 434040633.8963904, 434992462.44743246, 435944290.99847454, 436896119.5495166, 437847948.1005587, 438799776.6516008, 439751605.20264286, 440703433.75368494, 441655262.3047271, 442607090.85576916, 443558919.40681124, 444510747.9578533, 445462576.5088954, 446414405.0599375, 447366233.61097956, 448318062.16202164, 449269890.7130637, 450221719.26410586, 451173547.81514794, 452125376.36619, 453077204.91723204, 454029033.4682741, 454980862.0193162, 455932690.5703583, 456884519.12140036, 457836347.67244244, 458788176.2234846, 459740004.77452666, 460691833.32556874, 461643661.8766108, 462595490.4276529, 463547318.978695, 464499147.52973706, 465450976.08077914, 466402804.6318212, 467354633.18286335, 468306461.73390543, 469258290.2849475, 470210118.8359896, 471161947.3870317, 472113775.93807375, 473065604.48911583, 474017433.0401579, 474969261.5912])
              .range(['#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#edf8fbff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#ccece6ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#99d8c9ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#66c2a4ff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#2ca25fff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff', '#006d2cff']);
    

    color_map_e9785480c66b8b9d09623ef3d95fc079.x = d3.scale.linear()
              .domain([6814.6212, 474969261.5912])
              .range([0, 450 - 50]);

    color_map_e9785480c66b8b9d09623ef3d95fc079.legend = L.control({position: 'topright'});
    color_map_e9785480c66b8b9d09623ef3d95fc079.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
    color_map_e9785480c66b8b9d09623ef3d95fc079.legend.addTo(map_d8890ece366fc81bf6bdf590db40e3a6);

    color_map_e9785480c66b8b9d09623ef3d95fc079.xAxis = d3.svg.axis()
        .scale(color_map_e9785480c66b8b9d09623ef3d95fc079.x)
        .orient("top")
        .tickSize(1)
        .tickValues([6814.6212, 79167222.44953333, 158327630.27786666, 237488038.1062, 316648445.93453336, 395808853.7628667, 474969261.5912]);

    color_map_e9785480c66b8b9d09623ef3d95fc079.svg = d3.select(".legend.leaflet-control").append("svg")
        .attr("id", 'legend')
        .attr("width", 450)
        .attr("height", 40);

    color_map_e9785480c66b8b9d09623ef3d95fc079.g = color_map_e9785480c66b8b9d09623ef3d95fc079.svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(25,16)");

    color_map_e9785480c66b8b9d09623ef3d95fc079.g.selectAll("rect")
        .data(color_map_e9785480c66b8b9d09623ef3d95fc079.color.range().map(function(d, i) {
          return {
            x0: i ? color_map_e9785480c66b8b9d09623ef3d95fc079.x(color_map_e9785480c66b8b9d09623ef3d95fc079.color.domain()[i - 1]) : color_map_e9785480c66b8b9d09623ef3d95fc079.x.range()[0],
            x1: i < color_map_e9785480c66b8b9d09623ef3d95fc079.color.domain().length ? color_map_e9785480c66b8b9d09623ef3d95fc079.x(color_map_e9785480c66b8b9d09623ef3d95fc079.color.domain()[i]) : color_map_e9785480c66b8b9d09623ef3d95fc079.x.range()[1],
            z: d
          };
        }))
      .enter().append("rect")
        .attr("height", 40 - 30)
        .attr("x", function(d) { return d.x0; })
        .attr("width", function(d) { return d.x1 - d.x0; })
        .style("fill", function(d) { return d.z; });

    color_map_e9785480c66b8b9d09623ef3d95fc079.g.call(color_map_e9785480c66b8b9d09623ef3d95fc079.xAxis).append("text")
        .attr("class", "caption")
        .attr("y", 21)
        .text("Produ\u00e7\u00e3o");
    
                var lat_lng_popup_4244ce432be35648e386ed509fb499bb = L.popup();
                function latLngPop(e) {
                    lat_lng_popup_4244ce432be35648e386ed509fb499bb
                        .setLatLng(e.latlng)
                        .setContent("Latitude: " + e.latlng.lat.toFixed(4) +
                                    "<br>Longitude: " + e.latlng.lng.toFixed(4))
                        .openOn(map_d8890ece366fc81bf6bdf590db40e3a6);
                    }
                map_d8890ece366fc81bf6bdf590db40e3a6.on('click', latLngPop);
            
    
            var marker_35d162efcbafe0739a79882649ce230c = L.marker(
                [-9.6487, -35.7089],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_56da8518feafc94fe02d2e6e8f530d24 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_35d162efcbafe0739a79882649ce230c.setIcon(icon_56da8518feafc94fe02d2e6e8f530d24);
        
    
        var popup_eead34d5cce3fd88955ddb31d6f3ffba = L.popup({"maxWidth": "100%"});

        
            
                var html_875d1ef9ff3573fba8673589340ab02c = $(`<div id="html_875d1ef9ff3573fba8673589340ab02c" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Alagoas<br><b>Produção Total:</b> 935568.6105<br><b>Código Estado:</b> 27</div>`)[0];
                popup_eead34d5cce3fd88955ddb31d6f3ffba.setContent(html_875d1ef9ff3573fba8673589340ab02c);
            
        

        marker_35d162efcbafe0739a79882649ce230c.bindPopup(popup_eead34d5cce3fd88955ddb31d6f3ffba)
        ;

        
    
    
            marker_35d162efcbafe0739a79882649ce230c.bindTooltip(
                `<div>
                     Alagoas
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_2feff91f7b55e1ed2cc5f52bb1d01ede = L.marker(
                [-3.4653, -62.2159],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_64ed9e60a3771bad225e9f022a790593 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_2feff91f7b55e1ed2cc5f52bb1d01ede.setIcon(icon_64ed9e60a3771bad225e9f022a790593);
        
    
        var popup_cdced9b74e764dc587434f1b0f36fc15 = L.popup({"maxWidth": "100%"});

        
            
                var html_5319b642e59b5f6808324b03eab9245f = $(`<div id="html_5319b642e59b5f6808324b03eab9245f" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Amazonas<br><b>Produção Total:</b> 5413745.0847<br><b>Código Estado:</b> 13</div>`)[0];
                popup_cdced9b74e764dc587434f1b0f36fc15.setContent(html_5319b642e59b5f6808324b03eab9245f);
            
        

        marker_2feff91f7b55e1ed2cc5f52bb1d01ede.bindPopup(popup_cdced9b74e764dc587434f1b0f36fc15)
        ;

        
    
    
            marker_2feff91f7b55e1ed2cc5f52bb1d01ede.bindTooltip(
                `<div>
                     Amazonas
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_ee5177230df58e8039e0679e8b7a05d8 = L.marker(
                [-12.9716, -38.5014],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_67a998edd9107ef6ec88f51bb8fb6935 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_ee5177230df58e8039e0679e8b7a05d8.setIcon(icon_67a998edd9107ef6ec88f51bb8fb6935);
        
    
        var popup_99ffa164d50a9cccc3408ceaa4ee2990 = L.popup({"maxWidth": "100%"});

        
            
                var html_ef8f79a3e6329d906e776fbff3f6eab3 = $(`<div id="html_ef8f79a3e6329d906e776fbff3f6eab3" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Bahia<br><b>Produção Total:</b> 7459154.1068<br><b>Código Estado:</b> 29</div>`)[0];
                popup_99ffa164d50a9cccc3408ceaa4ee2990.setContent(html_ef8f79a3e6329d906e776fbff3f6eab3);
            
        

        marker_ee5177230df58e8039e0679e8b7a05d8.bindPopup(popup_99ffa164d50a9cccc3408ceaa4ee2990)
        ;

        
    
    
            marker_ee5177230df58e8039e0679e8b7a05d8.bindTooltip(
                `<div>
                     Bahia
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_1496027c60afc6685eaafa9ca69fc78e = L.marker(
                [-3.71722, -38.543303],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_43b28d7be2f668f19d5c889ab592b225 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_1496027c60afc6685eaafa9ca69fc78e.setIcon(icon_43b28d7be2f668f19d5c889ab592b225);
        
    
        var popup_4fd191672e5ab4213402986eb55c55ba = L.popup({"maxWidth": "100%"});

        
            
                var html_094ca3c4e3706e88de71991eb4165212 = $(`<div id="html_094ca3c4e3706e88de71991eb4165212" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Ceará<br><b>Produção Total:</b> 1312108.638<br><b>Código Estado:</b> 23</div>`)[0];
                popup_4fd191672e5ab4213402986eb55c55ba.setContent(html_094ca3c4e3706e88de71991eb4165212);
            
        

        marker_1496027c60afc6685eaafa9ca69fc78e.bindPopup(popup_4fd191672e5ab4213402986eb55c55ba)
        ;

        
    
    
            marker_1496027c60afc6685eaafa9ca69fc78e.bindTooltip(
                `<div>
                     Ceará
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_5a0afda1bb4bd62f7f677d9b40976700 = L.marker(
                [-20.3155, -40.3128],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_d9d4a298e8814ff1b940261338e9f7dd = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_5a0afda1bb4bd62f7f677d9b40976700.setIcon(icon_d9d4a298e8814ff1b940261338e9f7dd);
        
    
        var popup_9ff9b709d5384ede545bba9b5ed2f636 = L.popup({"maxWidth": "100%"});

        
            
                var html_28749de7c8482f23bdd60ab99798e217 = $(`<div id="html_28749de7c8482f23bdd60ab99798e217" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Espírito Santo<br><b>Produção Total:</b> 66048197.6886<br><b>Código Estado:</b> 32</div>`)[0];
                popup_9ff9b709d5384ede545bba9b5ed2f636.setContent(html_28749de7c8482f23bdd60ab99798e217);
            
        

        marker_5a0afda1bb4bd62f7f677d9b40976700.bindPopup(popup_9ff9b709d5384ede545bba9b5ed2f636)
        ;

        
    
    
            marker_5a0afda1bb4bd62f7f677d9b40976700.bindTooltip(
                `<div>
                     Espírito Santo
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_640d5b4357368cc1f3706e98add23d65 = L.marker(
                [-2.53874, -44.28296],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_5464fe5fa6e7977dca162d9be2519147 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_640d5b4357368cc1f3706e98add23d65.setIcon(icon_5464fe5fa6e7977dca162d9be2519147);
        
    
        var popup_2ee31f2a98a9c273033305b6bacf393a = L.popup({"maxWidth": "100%"});

        
            
                var html_2b3b5df8ea2cb4facdeb8b066735fc54 = $(`<div id="html_2b3b5df8ea2cb4facdeb8b066735fc54" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Maranhão<br><b>Produção Total:</b> 6814.6212<br><b>Código Estado:</b> 21</div>`)[0];
                popup_2ee31f2a98a9c273033305b6bacf393a.setContent(html_2b3b5df8ea2cb4facdeb8b066735fc54);
            
        

        marker_640d5b4357368cc1f3706e98add23d65.bindPopup(popup_2ee31f2a98a9c273033305b6bacf393a)
        ;

        
    
    
            marker_640d5b4357368cc1f3706e98add23d65.bindTooltip(
                `<div>
                     Maranhão
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_3281be6d4bf7d9c735ef4da1170355c6 = L.marker(
                [-5.794477, -35.212377],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_588471482b404bb98d0ae47575b7a611 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_3281be6d4bf7d9c735ef4da1170355c6.setIcon(icon_588471482b404bb98d0ae47575b7a611);
        
    
        var popup_414aef3d12eb4589c97e28bbba3914ec = L.popup({"maxWidth": "100%"});

        
            
                var html_59b01c429774230a36d50300834fd524 = $(`<div id="html_59b01c429774230a36d50300834fd524" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Rio Grande do Norte<br><b>Produção Total:</b> 10562113.5583<br><b>Código Estado:</b> 24</div>`)[0];
                popup_414aef3d12eb4589c97e28bbba3914ec.setContent(html_59b01c429774230a36d50300834fd524);
            
        

        marker_3281be6d4bf7d9c735ef4da1170355c6.bindPopup(popup_414aef3d12eb4589c97e28bbba3914ec)
        ;

        
    
    
            marker_3281be6d4bf7d9c735ef4da1170355c6.bindTooltip(
                `<div>
                     Rio Grande do Norte
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_a1227b6d89878b6ba6de8a01c0f92eb1 = L.marker(
                [-22.9068, -43.1729],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_148e37aedc8433b641e04d391d4a8cc1 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_a1227b6d89878b6ba6de8a01c0f92eb1.setIcon(icon_148e37aedc8433b641e04d391d4a8cc1);
        
    
        var popup_08994aaaf52d8ee0b1e5d9b2928820e3 = L.popup({"maxWidth": "100%"});

        
            
                var html_c1451589ad5962ffaec18ffd21c073ed = $(`<div id="html_c1451589ad5962ffaec18ffd21c073ed" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Rio de Janeiro<br><b>Produção Total:</b> 474969261.5912<br><b>Código Estado:</b> 33</div>`)[0];
                popup_08994aaaf52d8ee0b1e5d9b2928820e3.setContent(html_c1451589ad5962ffaec18ffd21c073ed);
            
        

        marker_a1227b6d89878b6ba6de8a01c0f92eb1.bindPopup(popup_08994aaaf52d8ee0b1e5d9b2928820e3)
        ;

        
    
    
            marker_a1227b6d89878b6ba6de8a01c0f92eb1.bindTooltip(
                `<div>
                     Rio de Janeiro
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_e4d9c0b95982e5fc8156fcc36b20daa4 = L.marker(
                [-10.947246, -37.073076],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_ca155d49ec462db16d6ce891bcb48383 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_e4d9c0b95982e5fc8156fcc36b20daa4.setIcon(icon_ca155d49ec462db16d6ce891bcb48383);
        
    
        var popup_81dfc9ea976b1e24f8e7dc6ea9793a81 = L.popup({"maxWidth": "100%"});

        
            
                var html_0ea231247b62702084c00862e979ee6c = $(`<div id="html_0ea231247b62702084c00862e979ee6c" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> Sergipe<br><b>Produção Total:</b> 6229558.4615<br><b>Código Estado:</b> 28</div>`)[0];
                popup_81dfc9ea976b1e24f8e7dc6ea9793a81.setContent(html_0ea231247b62702084c00862e979ee6c);
            
        

        marker_e4d9c0b95982e5fc8156fcc36b20daa4.bindPopup(popup_81dfc9ea976b1e24f8e7dc6ea9793a81)
        ;

        
    
    
            marker_e4d9c0b95982e5fc8156fcc36b20daa4.bindTooltip(
                `<div>
                     Sergipe
                 </div>`,
                {"sticky": true}
            );
        
    
            var marker_6ac60162fc66821c87c07e4bdad1d02f = L.marker(
                [-23.5505, -46.6333],
                {}
            ).addTo(map_d8890ece366fc81bf6bdf590db40e3a6);
        
    
            var icon_e213f5e1a5f2f14c12115a4ab69e8360 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "green", "prefix": "glyphicon"}
            );
            marker_6ac60162fc66821c87c07e4bdad1d02f.setIcon(icon_e213f5e1a5f2f14c12115a4ab69e8360);
        
    
        var popup_6609c98ecd0ad241a3c768ea852b18fe = L.popup({"maxWidth": "100%"});

        
            
                var html_b20a3c79685f3998ab7a3d0ef2d63075 = $(`<div id="html_b20a3c79685f3998ab7a3d0ef2d63075" style="width: 100.0%; height: 100.0%;"><b>Estado:</b> São Paulo<br><b>Produção Total:</b> 55190329.5303<br><b>Código Estado:</b> 35</div>`)[0];
                popup_6609c98ecd0ad241a3c768ea852b18fe.setContent(html_b20a3c79685f3998ab7a3d0ef2d63075);
            
        

        marker_6ac60162fc66821c87c07e4bdad1d02f.bindPopup(popup_6609c98ecd0ad241a3c768ea852b18fe)
        ;

        
    
    
            marker_6ac60162fc66821c87c07e4bdad1d02f.bindTooltip(
                `<div>
                     São Paulo
                 </div>`,
                {"sticky": true}
            );