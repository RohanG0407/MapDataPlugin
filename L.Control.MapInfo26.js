L.Layer.MapData = L.Layer.extend({
    onAdd: function (map) {
        map.on('zoom', function () {
            var zoomLevel = map.getZoom();
            var tooltip = $('.leaflet-tooltip');
        
            switch (zoomLevel) {
                case 2:
                    tooltip.css('font-size', 3);
                    break;
                case 3:
                    tooltip.css('font-size', 5);
                    break;
                case 4:
                    tooltip.css('font-size', 8);
                    break;
                case 5:
                    tooltip.css('font-size', 12);
                    break;
                case 6:
                    tooltip.css('font-size', 16);
                    break;
                default:
                    tooltip.css('font-size', 18);
            }
        });

        // $.get("http://127.0.0.1:5000/flyTo", function(data) {
        //     console.log(data)
        //     map.flyTo([0,0], 5);
        // });

        map.on('moveend', function(e) {
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