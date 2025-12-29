import React from "react";
import type { ComponentProps } from "react";
import { Text } from "@trilogy-ds/react";

interface RichTextProps extends ComponentProps<typeof Text> {
  text: string;
}

/**
 * RichText Component
 *
 * Parses and renders text with HTML-like markup from JSON strings.
 * Supports: <b>, <strong>, <i>, <em>, <br />, \n, <u>, <mark>
 *
 * @example
 * <RichText text="Hello <b>world</b>!<br />New line here" />
 */
export function RichText({ text, ...textProps }: RichTextProps) {
  const parseText = (input: string): React.ReactNode[] => {
    // Replace \n with <br /> for consistent handling
    const processedText = input.replace(/\\n|\n/g, "<br />");

    // Regex to match supported HTML tags
    const tagRegex =
      /(<b>|<\/b>|<strong>|<\/strong>|<i>|<\/i>|<em>|<\/em>|<u>|<\/u>|<mark>|<\/mark>|<br\s*\/?>)/gi;

    const parts = processedText.split(tagRegex);
    const result: React.ReactNode[] = [];
    const stack: string[] = [];
    let currentText = "";
    let key = 0;

    const flushText = () => {
      if (currentText) {
        let node: React.ReactNode = currentText;

        // Apply styles based on stack (innermost to outermost)
        for (let i = stack.length - 1; i >= 0; i--) {
          const tag = stack[i];
          switch (tag) {
            case "b":
            case "strong":
              node = <strong key={`${key}-strong`}>{node}</strong>;
              break;
            case "i":
            case "em":
              node = <em key={`${key}-em`}>{node}</em>;
              break;
            case "u":
              node = <u key={`${key}-u`}>{node}</u>;
              break;
            case "mark":
              node = <mark key={`${key}-mark`}>{node}</mark>;
              break;
          }
          key++;
        }

        result.push(node);
        currentText = "";
      }
    };

    parts.forEach((part) => {
      if (!part) return;

      const lowerPart = part.toLowerCase();

      // Handle line breaks
      if (lowerPart.match(/^<br\s*\/?>$/)) {
        flushText();
        result.push(<br key={`br-${key++}`} />);
        return;
      }

      // Handle opening tags
      if (lowerPart === "<b>" || lowerPart === "<strong>") {
        flushText();
        stack.push("strong");
        return;
      }
      if (lowerPart === "<i>" || lowerPart === "<em>") {
        flushText();
        stack.push("em");
        return;
      }
      if (lowerPart === "<u>") {
        flushText();
        stack.push("u");
        return;
      }
      if (lowerPart === "<mark>") {
        flushText();
        stack.push("mark");
        return;
      }

      // Handle closing tags
      if (lowerPart === "</b>" || lowerPart === "</strong>") {
        flushText();
        if (stack[stack.length - 1] === "strong") {
          stack.pop();
        }
        return;
      }
      if (lowerPart === "</i>" || lowerPart === "</em>") {
        flushText();
        if (stack[stack.length - 1] === "em") {
          stack.pop();
        }
        return;
      }
      if (lowerPart === "</u>") {
        flushText();
        if (stack[stack.length - 1] === "u") {
          stack.pop();
        }
        return;
      }
      if (lowerPart === "</mark>") {
        flushText();
        if (stack[stack.length - 1] === "mark") {
          stack.pop();
        }
        return;
      }

      // Regular text
      currentText += part;
    });

    flushText();
    return result;
  };

  const content = parseText(text);

  return <Text {...textProps}>{content}</Text>;
}
