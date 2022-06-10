L.Control.MapData = L.Control.extend({
    options: {
        currentCenter: 0,
        currentZoom: 0
    },

    onAdd: function (map) {
        map.on('move', function(e) {
            this.currentCenter = map.getCenter()
            $.post("http://127.0.0.1:5000/postMapData", {
                data: "Hello"
            });
            console.log(map.getCenter())
        });
    }
});

L.control.mapData = function (options) {
    return new L.Control.MapData(options);
};