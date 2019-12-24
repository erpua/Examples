# icons_mixin
mixin for icons


$icons: tools,computer,bulb,atom,case,download;

@mixin generate-pseudo-icons($baseclass, $list, $path, $ext) {
    @each $icon in $list {
        .#{$baseclass}#{$icon}::before {
            background-image: url(#{$path}#{$icon}.#{$ext});

            @media (min-resolution: 192dpi), (min-resolution: 2dppx) {/* for example*/
                background-image: url(#{$path}#{$icon}@2px.#{$ext});
            }
        }
    }
}

@include generate-pseudo-icons('features__icon--', $icons, '../img/icons/features/icon-', 'png');

.features__icon--tools::before {
    background-image: url('../image.icons/features/icon-tools.png');
}