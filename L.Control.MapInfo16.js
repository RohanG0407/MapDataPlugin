L.Layer.MapData = L.Layer.extend({
    onAdd: function (map) {
        map.on('move', function(e) {
            currentCenter = map.getCenter()
            currentZoom = map.getZoom()
            $.post("http://127.0.0.1:5000/postMapData", {
                currentCenter: [currentCenter.lat, currentCenter.lng],
                currentZoomLevel: currentZoom
            });
        });
    }
});