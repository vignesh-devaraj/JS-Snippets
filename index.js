import ArrayMethodsImpl from './Array/array-methods.js';
import ObjectSnippetImpl from './Object/object-snippet.js';
import performance from './Performance/debounce.js';

// ArrayMethodsImpl();
// ObjectSnippetImpl();
function inputHandler() {
  console.log('inside input handler');
  // performance.enableDebounce();
  performance.enableThrottling();
}

const search = document.getElementById('search-input');
search.addEventListener('input', inputHandler);
