import React, { useRef, useState } from 'react';

const CounterRef = () => {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  };

  return (
    <div>
      <p>React use ref</p>
      <button onClick={handleClick}>Click me!</button>
      <p>You clicked button {ref.current} times!</p>
    </div>
  );
};

const FormRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </>
  );
};

const ChatRef = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let sendTimeout = null;

  const handleSend = () => {
    setIsSending(true);

    sendTimeout = setTimeout(() => {
      alert(`Sent! Message: ${text}`);
      setIsSending(false);
    }, 3000);
  };

  const handleUndo = () => {
    console.log('UNDO MESSAGE');
    clearTimeout(sendTimeout);
    setIsSending(false);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend} disabled={isSending}>
        Send
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
};

const ChatRefFixed = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let timeoutRef = useRef(null);

  const handleSend = () => {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert(`Sent! Message: ${text}`);
      setIsSending(false);
    }, 3000);
  };

  const handleUndo = () => {
    console.log('UNDO MESSAGE');
    clearTimeout(timeoutRef.current);
    setIsSending(false);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend} disabled={isSending}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
};

export function ReactUseRef() {
  return <ChatRefFixed />;
}
