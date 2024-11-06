var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_polygonsrm_1 = new ol.format.GeoJSON();
var features_polygonsrm_1 = format_polygonsrm_1.readFeatures(json_polygonsrm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonsrm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonsrm_1.addFeatures(features_polygonsrm_1);
var lyr_polygonsrm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonsrm_1, 
                style: style_polygonsrm_1,
                popuplayertitle: "polygonsrm",
                interactive: true,
                title: '<img src="styles/legend/polygonsrm_1.png" /> polygonsrm'
            });
var format_linestring_2 = new ol.format.GeoJSON();
var features_linestring_2 = format_linestring_2.readFeatures(json_linestring_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linestring_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linestring_2.addFeatures(features_linestring_2);
var lyr_linestring_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linestring_2, 
                style: style_linestring_2,
                popuplayertitle: "line string",
                interactive: true,
                title: '<img src="styles/legend/linestring_2.png" /> line string'
            });

lyr_OSMStandard_0.setVisible(true);lyr_polygonsrm_1.setVisible(true);lyr_linestring_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_polygonsrm_1,lyr_linestring_2];
lyr_polygonsrm_1.set('fieldAliases', {'id': 'id', 'population': 'population', 'literacy': 'literacy', });
lyr_linestring_2.set('fieldAliases', {'id': 'id', });
lyr_polygonsrm_1.set('fieldImages', {'id': '', 'population': '', 'literacy': '', });
lyr_linestring_2.set('fieldImages', {'id': '', });
lyr_polygonsrm_1.set('fieldLabels', {'id': 'no label', 'population': 'no label', 'literacy': 'no label', });
lyr_linestring_2.set('fieldLabels', {'id': 'no label', });
lyr_linestring_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});