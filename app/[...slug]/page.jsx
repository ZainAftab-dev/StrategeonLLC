import App from '../../src/App.jsx';

export default function CatchAllPage({ params }) {
  const path = '/' + (params.slug || []).join('/');
  return <App initialRoute={path} />;
}
