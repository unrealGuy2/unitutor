import ChatInterface from "@/components/dashboard/ChatInterface";

export default function ChatPage() {
  return (
    // We don't need a wrapper div because the ChatInterface handles its own height
    <ChatInterface />
  );
}