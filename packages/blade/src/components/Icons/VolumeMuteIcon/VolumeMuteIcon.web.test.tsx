import VolumeMuteIcon from '.';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<VolumeMuteIcon />', () => {
  it('should render VolumeMuteIcon', () => {
    const { container } = renderWithTheme(
      <VolumeMuteIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
