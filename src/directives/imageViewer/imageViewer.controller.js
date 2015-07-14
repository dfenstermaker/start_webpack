class ImageViewerController {


    constructor ($q, imageFilters) {
        this.$q = $q
        this.imageFilters = imageFilters
    }

    hasTruthyValue () { return true }

    createImage (url) {

        let img      = new Image()
        let deferred = this.$q.defer()
        img.src      = this.url;
        img.onload = () => deferred.resolve(img)

        return deferred.promise
    }

    grayscaleImage (img) {
        return this.imageFilters.grayscale(img)
    }

    invertImage (img) {
        return this.imageFilters.invert(img)
    }

    /*@ngInject*/
    static factory ($q, imageFilters) {
        return new ImageViewerController($q, imageFilters)
    }

}

export default ImageViewerController
