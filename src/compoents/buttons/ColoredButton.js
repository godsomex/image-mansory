import styled from "@emotion/styled";

const ColoredButton = styled(`button`)(
  {
    fontSize: 14,
    height: 30,
    paddingRight: 12,
    paddingLeft: 12,
    marginRight: 5,
    borderRadius: 6,
    borderWidth: 0,
    color: `white`,
    outline: `none`,
  },
  ({ color }) => ({
    backgroundColor: color,
    ":hover": {
      backgroundColor: "blue",
    },
    ":disabled": {
      backgroundColor: "darkblue",
    },
  })
);

export default ColoredButton;
