L.Layer.MapData = L.Layer.extend({
    onAdd: function (map) {
        var socket = io('http://localhost:5000', {
            transports: ['websocket'],
            upgrade: false
        });

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        async function demo() {
            index = 0
            while (true) {
                socket.emit("requestWarboard", "Warboard requested!")
                await sleep(1);
                index = index + 1
              }
        }

        socket.on("connected" , (arg) => {
            console.log(arg);
        });
        socket.on("disconnected" , (arg) => {
            console.log(arg);
        }); 

        socket.on('disconnectWarboard', (arg) => {
            dontBreak = true;
            console.log("Warboard Disconnected");
        });

        socket.on("warboardData", (arg) => {
            for(let index = 0; index < arg.data.length; index++) {
            var circle = L.circle(
            [arg.data[index].lat, arg.data[index].lng],
            {"bubblingMouseEvents": true, "color": "#3388ff", "dashArray": null, "dashOffset": null, "fill": false, "fillColor": "#3388ff", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "opacity": 0, "stroke": false, "weight": 0}
        ).addTo(map);

        var clickable_tooltip = new L.ClickableTooltip(
            {"className": "airport-tooltip", "direction": "center", "interactive": true, "noWrap": true, "opacity": 0.9, "permanent": true, "sticky": true}
        );
        clickable_tooltip.setContent( arg.data[index].stationName );
        clickable_tooltip.on('click', function(event) {
            socket.emit("clickedStation", arg.data[index].stationName);
        });
        circle.bindTooltip(
            clickable_tooltip
        );
            console.log(arg.data);
        }});

        demo();
    }
});