L.Layer.MapData = L.Layer.extend({
    onAdd: function (map) {
        map.on('zoomstart', function () {
            var zoomLevel = map.getZoom();
            var tooltip = $('.leaflet-tooltip');
        
            switch (zoomLevel) {
                case 3:
                    tooltip.css('font-size', 7);
                    break;
                case 4:
                    tooltip.css('font-size', 10);
                    break;
                case 5:
                    tooltip.css('font-size', 12);
                    break;
                case 6:
                    tooltip.css('font-size', 14);
                    break;
                default:
                    tooltip.css('font-size', 14);
            }
        });

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