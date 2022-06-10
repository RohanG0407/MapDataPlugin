L.Control.MapData = L.Control.extend({
    options: {
        currentCenter: 0,
        currentZoom: 0
    },

    onAdd: function (map) {
        map.on('move', function(e) {
            this.currentCenter = map.getCenter()
            $.ajax({
                url: "https://127.0.0.1:5000/postMapData",
                type: 'POST',
                data: {
                    data: "Hello"
                },
                success : function (response) {
                },
                error: function (response) {
                }
            });
            console.log(map.getCenter())
        });
    }
});

L.control.mapData = function (options) {
    return new L.Control.MapData(options);
};