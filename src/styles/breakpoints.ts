interface ISize {
  desktop: string;
  tablet: string;
  phone: string;
}

const size: ISize = {
  desktop: '1024px',
  tablet: '768px',
  phone: '320px',
};

const device = {
  desktop: `(max-width: ${size.desktop})`,
  tablet: `(max-width: ${size.tablet})`,
  phone: `(max-width: ${size.phone})`,
};

export default device;
