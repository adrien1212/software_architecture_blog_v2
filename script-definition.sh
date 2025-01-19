find content -type f -name '*.md' | while read -r file; do
  awk '
  BEGIN { in_notice = 0 }
  /{{% notice style="warning" title=" " icon=" " %}}/ {
    in_notice = 1;
    print "> [!definition] Definition";
    next;
  }
  in_notice && /{{% \/notice %}}/ {
    in_notice = 0;
    next;
  }
  in_notice {
    print ">  " $0;
    next;
  }
  { print }
  ' "$file" > temp.md && mv temp.md "$file"
done

