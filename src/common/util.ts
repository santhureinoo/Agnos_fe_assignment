import { CoordinateProps } from "./types";

/**
    * ray-casting algorithm based on
    * https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html
   **/
export const findCoordinateInPolygon = (point: CoordinateProps, vs: CoordinateProps[]) => {
    var x = point.x, y = point.y;

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i].x, yi = vs[i].y;
        var xj = vs[j].x, yj = vs[j].y;

        var intersect = ((yi > y) !== (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};