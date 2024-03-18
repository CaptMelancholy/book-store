import { useSelector } from 'react-redux';
import BodyTemplate from '../components/BodyTemplate/BodyTemplate';
import BookList from '../components/BookList/BookList';
import SubscribeTemplate from '../components/SubscribeTemplate/SubscribeTemplate';
import { newReleasesSelector } from '../store/slices/books/books.selectors';

export default function MainPage() {
  const newReleases = useSelector(newReleasesSelector);
  return (
    <BodyTemplate title="NEW RELEASES BOOKS" backButton={false}>
      <BookList books={newReleases} />
      <SubscribeTemplate />
    </BodyTemplate>
  );
}
