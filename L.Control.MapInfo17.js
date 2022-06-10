L.Layer.MapData = L.Layer.extend({
    onAdd: function (map) {
        map.on('move', function(e) {
            currentCenter = map.getCenter();
            currentZoom = map.getZoom();
            data_dict = {
                'currentCenter': [currentCenter.lat, currentCenter.lng],
                'currentZoom': currentZoom
            };

            $.post("http://127.0.0.1:5000/postMapData", {
                data: data_dict
            });
        });
    }
});