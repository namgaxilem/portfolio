export function removeAnimation() {
    if (this.$refs["title-2-img"]) {
        this.$refs["title-2-img"].classList.remove('title-2-img-scale-in');
        this.$refs["preload-image"].classList.remove('preload-image');
        this.$refs["column-preload-image"].classList.remove('column-preload-image');
        void this.$refs["title-2-img"].offsetWidth;
    } else {
        this.$refs["title-2"].classList.remove('title-2-fade-out-to-right');
        this.$refs["title-2"].classList.remove('title-2-fade-in-to-left');
        void this.$refs["title-2"].offsetWidth;
    }

    this.$refs["title-text"].classList.remove('title-text-fade-in-to-right');
    this.$refs["underline-above"].classList.remove('underline-above-fade-in-to-right');
    this.$refs["underline-below"].classList.remove('underline-below-fade-in-to-right');
    this.$refs["sub-text"].classList.remove('sub-text-fade-in-to-right');

    void this.$refs["title-text"].offsetWidth;
    void this.$refs["underline-above"].offsetWidth;
    void this.$refs["underline-below"].offsetWidth;
    void this.$refs["sub-text"].offsetWidth;
}

export function addFadeIn() {
    if (this.$refs["title-2-img"]) {
        this.$refs["title-2-img"].classList.add('title-2-img-scale-in');
        this.$refs["preload-image"].classList.add('preload-image');
        this.$refs["column-preload-image"].classList.add('column-preload-image');
    } else {
        this.$refs["title-2"].classList.add('title-2-fade-in-to-left');
    }

    this.$refs["title-text"].classList.add('title-text-fade-in-to-right');
    this.$refs["underline-above"].classList.add('underline-above-fade-in-to-right');
    this.$refs["underline-below"].classList.add('underline-below-fade-in-to-right');
    this.$refs["sub-text"].classList.add('sub-text-fade-in-to-right');
}

export function addFadeOut() {
    if (this.$refs["title-2-img"]) {
        return null;
    } else {
        this.$refs["title-2"].classList.add('title-2-fade-out-to-right');
    }
}

export default { removeAnimation, addFadeIn, addFadeOut }
