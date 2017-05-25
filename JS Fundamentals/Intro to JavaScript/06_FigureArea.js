function area(w, h, W, H) {
    let [firstArea, secondArea, thirdArea] = [w * h, W * H, Math.min(w, W) * Math.min(h, H)]

    return firstArea + secondArea - thirdArea;
}