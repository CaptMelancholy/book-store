interface ISize {
  desktop: string;
  tablet: string;
  phone: string;
}

const size: ISize = {
  desktop: '1200px',
  tablet: '780px',
  phone: '480px',
};

const device = {
  desktop: `(max-width: ${size.desktop})`,
  tablet: `(max-width: ${size.tablet})`,
  phone: `(max-width: ${size.phone})`,
};

export default device;
