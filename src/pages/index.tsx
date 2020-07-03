import { h, FunctionComponent } from "preact";
import { css } from "linaria";
const title = css`
  color: ${"#FFAAFF"};
`;

export const IndexPage: FunctionComponent = () => {
  return (
    <html>
      <body>
        <h1 className={title}>Hello World</h1>
      </body>
    </html>
  );
};
