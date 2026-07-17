import App from '../../src/App.jsx';

export default async function CatchAllPage({ params }) {
  const { slug } = await params;
  const path = '/' + (slug || []).join('/');
  return <App initialRoute={path} />;
}
