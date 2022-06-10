// L.Control.MapData = L.Control.extend({
//     options: {
//         currentCenter: 0,
//         currentZoom: 0
//     },

//     onAdd: function (map) {
//         map.on('move', function(e) {
//             currentCenter = map.getCenter()
//             $.post("http://127.0.0.1:5000/postMapData", {
//                 data: [currentCenter.lat, currentCenter.lng]
//             });
//         });
//     }
// });

// L.control.mapData = function (options) {
//     return new L.Control.MapData(options);
// };

L.Layer.MapData= L.Layer.extend({
    options: {
        currentCenter: 0,
        currentZoom: 0
    },

    onAdd: function (map) {
        map.on('move', function(e) {
            currentCenter = map.getCenter()
            $.post("http://127.0.0.1:5000/postMapData", {
                data: [currentCenter.lat, currentCenter.lng]
            });
        });
    }
});

L.layer.mapData = function (options) {
    return new L.Layer.MapData(options);
};