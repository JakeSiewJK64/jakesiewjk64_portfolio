import { BADGE_ICON } from "@/tools/constants";
import { Badge } from "./ui/badge";

const SkillBadges = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {tags.map((tag) => {
        const tagIcon = BADGE_ICON[tag.toLocaleLowerCase()];

        if (tagIcon) {
          const { icon, bgColor, fontColor } = tagIcon;

          return (
            <Badge
              key={tag}
              variant="outline"
              style={{
                backgroundColor: bgColor,
                color: fontColor,
                border: `solid 1px ${fontColor}`,
              }}
            >
              <div className="mr-1">{icon}</div>
              {tag}
            </Badge>
          );
        }

        return <Badge key={tag}>{tag}</Badge>;
      })}
    </div>
  );
};

export default SkillBadges;
