// @flow

import * as React from "react";
import cn from "classnames";

type Props = {
  +children?: React.Node,
  +className?: string,
  +stacked?: boolean
};

function AvatarList({
  className,
  children,
  stacked,
  ...props
}: Props): React.Node {
  const classes = cn(
    {
      "avatar-list": true,
      "avatar-list-stacked": stacked
    },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default AvatarList;
