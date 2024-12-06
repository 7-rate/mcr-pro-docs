#!/bin/bash

# assetにある画像ファイルを幅768pxのwebp形式に変換し、static/imgに保存する

# $1 file
function convert_webp() {
    dir = $(dirname $1 | sed -e 's|./asset|./static/img|')
    mkdir -p $dir

    file_name=$(basename -- $1)
    out_file_name = $dir/$file_name%.*webp
    cwebp $1 -o $out_file_name -resize 768 0
}

export -f convert_webp

find ./asset -type f \(-name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' \) | xargs -P $(nproc) -I {} bash -c 'convert_webp "$@"' _ {}