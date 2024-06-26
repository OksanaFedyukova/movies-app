
import ConfirmModal  from '../src/components/ConfirmModal'

export default {
  title: 'ConfirmModal component',
  component: ConfirmModal
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  open: true,
  title: 'My favourite movies',
  url: 'http://localhost:5173/recommend?title="my movies"&ids=232,434',
  onClose: () => {}
};