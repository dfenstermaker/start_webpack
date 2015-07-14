import angular from 'angular'
import _       from 'lodash'

class ImageFilters {

    grayscale (img) {

        var data = img.data

        for (var i = 0; i < data.length; i += 4) {

            let avg = (data[i] + data[i + 1] + data[i + 2]) / 3

            data[i]     = avg
            data[i + 1] = avg
            data[i + 2] = avg
        }

        return img
    }

    invert (img) {

        var data = img.data

        for (var i = 0; i < data.length; i += 4) {
          data[i]     = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }

        return img

    }

    static factory () {
        return new ImageFilters()
    }
}

angular.module('imageFilters', [])
    .service('imageFilters', ImageFilters.factory )

export default ImageFilters
