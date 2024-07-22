import { connectYoutube } from '@/actions';

export default function ConnectForm() {
  return (
    <form action={connectYoutube}>
      <button type="submit">Connect to Youtube</button>
    </form>
  );
}
