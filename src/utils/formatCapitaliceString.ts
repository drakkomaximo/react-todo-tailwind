export const formatCapitaliceString = (value: string) => {
    if (value) {
      return value[0].toUpperCase() + value.slice(1).toLowerCase();
    } else {
      return '';
    }
  };