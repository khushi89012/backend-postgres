const initialState = {
  part3: JSON.parse(localStorage.getItem("part3")) || [],
  part1: JSON.parse(localStorage.getItem("part1")) || [],
  part2: JSON.parse(localStorage.getItem("part2")) || [],
  user: [],
};

export const partData = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "PART1":
      return {
        ...state,
        part1: payload,
      };

    case "PART2":
      return {
        ...state,
        part2: payload,
      };

    case "PART3":
      return {
        ...state,
        part3: [...state.part3, payload],
      };
    case "USER":
      return {
        ...state,
        user: [payload],
      };

    default:
      return state;
  }
};
