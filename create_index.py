#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
from os.path import splitext, basename

def main():
    datas = [
              "res/data/一人称.html"
            , "res/data/二人称.html"
            , "res/data/性格.html"
            , "res/data/髪型.html"

            , "res/data/トップス.html"
            , "res/data/ズボン.html"
            , "res/data/スカート.html"
            , "res/data/ドレス.html"
            , "res/data/制服.html"
            , "res/data/アンダーウェア.html"
            , "res/data/履物.html"
            , "res/data/かぶりもの.html"
            , "res/data/寝巻き着.html"
            , "res/data/水着.html"
            , "res/data/装身具.html"

            , "res/data/オプション.html"
            ]

    checkboxtext = \
            '<label>' \
                '<input' \
                ' type="checkbox"' \
                ' value="{title}:{text}"' \
                ' onclick="updateRecords();"' \
                ' />' \
                '{fulltext}' \
            '</label>'

    tables = []
    for filepath in datas:
        with open("table.html") as table:
            tabletext = table.read()
            with open(filepath) as datafile:
                caption = splitext(basename(filepath))[0]

                line = datafile.readline()
                trs = []
                while line:
                    line = line.rstrip("\n")
                    if line == "":
                        continue

                    if line.startswith("<"):
                        text = re.sub(r"</?[^>]+>", "", line)
                    else:
                        text = line

                    text = checkboxtext.format(title=caption, text=text, fulltext=line)
                    text = "<tr><td>{}</td></tr>".format(text)
                    trs.append(text)
                    line = datafile.readline()
                tbody = "\n".join(trs)
                newtable = tabletext.format(caption=caption, tbody=tbody)
                tables.append(newtable)

    htmllines = []
    with open("template.html") as template:
        text = "\n".join(tables)
        line = template.readline()
        while line:
            if "{target}" in line:
                htmllines.append(text)
            else:
                htmllines.append(line)
            line = template.readline()

    with open("index.html", "w") as indexhtml:
        indexhtml.write("".join(htmllines))

if __name__ == '__main__':
    main()

