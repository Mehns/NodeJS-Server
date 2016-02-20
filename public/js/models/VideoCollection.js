define(['backbone', 'models/VideoModel'],
    function(Backbone, VideoModel){

        var VideoCollection = Backbone.Collection.extend({
        	model: VideoModel,
            url: '/videos'            
        });

        return VideoCollection;
    }
);
