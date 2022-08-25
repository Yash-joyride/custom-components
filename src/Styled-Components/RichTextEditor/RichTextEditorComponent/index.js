import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { RichTextEditorWrapper } from "./style";
import { UndoIcon, RedoIcon, FontFamilyIcon, BoldIcon, ItalicIcon, UnderlineIcon, BackColorIcon, AlignIcon, NumListIcon, BulListIcon, ArrowDown } from "./constant";

export const RichTextEditorComponent = () => {
  const editorRef = useRef(null);
  return (
    <RichTextEditorWrapper>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 300,
          menubar: false,
          //   plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste code help wordcount"],
          //   selector: "#editor",
          plugins: "code print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export ",
          toolbar: "undo  redo  | bold  italic underline backcolor | alignment  numlist bullist | formatgroup",
          toolbar_groups: {
            formatgroup: {
              icon: "more-drawer",
              tooltip: "Formatting",
              items: "fontselect fontsizeselect formatselect | outdent indent | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",
            },
            alignment: {
              type: "menubutton",
              icon: "align-left",
              items: "alignleft aligncenter alignright",
            },
          },
          setup: function (editor) {
            editor.ui.registry.addMenuButton("", {
              //   text: "alignment",
              icon: "align-left",
              onAction: function () {
                alert("Button clicked!");
              },
              fetch: function (callback) {
                var items = [
                  {
                    type: "menuitem",
                    // text: "Menu item 1",
                    icon: "align-left",
                    // onAction: function () {
                    //   editor.insertContent("&nbsp;<em>You clicked menu item 1!</em>");
                    // },
                    // onclick: function () {
                    //   tinymce.activeEditor.formatter.toggle("alignleft");
                    // },
                  },
                  {
                    type: "menuitem",
                    // text: "Menu item 1",
                    icon: "align-right",
                    // onclick: function () {
                    //   tinymce.activeEditor.execCommand("JustifyRight");
                    //   this.parent().parent().icon("alignright");
                    //   this.parent().parent().value = "JustifyRight";
                    // },
                    // onAction: function () {
                    //   editor.insertContent("&nbsp;<em>You clicked menu item 1!</em>");
                    // },
                  },
                  {
                    type: "menuitem",
                    // text: "Menu item 2",
                    icon: "align-center",
                    // onclick: function () {
                    //   tinymce.activeEditor.formatter.toggle("aligncenter");
                    // },
                    // onAction: function () {
                    //   editor.insertContent("&nbsp;<em>You clicked menu item 1!</em>");
                    // },
                  },
                  {
                    type: "menuitem",
                    // text: "Menu item 3",
                    icon: "align-justify",
                    // onclick: function () {
                    //   tinymce.activeEditor.formatter.toggle("alignjustify");
                    // },
                    // onAction: function () {
                    //   editor.insertContent("&nbsp;<em>You clicked menu item 1!</em>");
                    // },
                  },
                ];
                callback(items);
              },
            });
            editor.ui.registry.addIcon("undo", UndoIcon);
            editor.ui.registry.addIcon("redo", RedoIcon);
            editor.ui.registry.addIcon("bold", BoldIcon);
            editor.ui.registry.addIcon("italic", ItalicIcon);
            editor.ui.registry.addIcon("underline", UnderlineIcon);
            editor.ui.registry.addIcon("highlight-bg-color", BackColorIcon);
            editor.ui.registry.addIcon("align-left", AlignIcon);
            editor.ui.registry.addIcon("ordered-list", NumListIcon);
            editor.ui.registry.addIcon("unordered-list", BulListIcon);
            editor.ui.registry.addIcon("chevron-down", ArrowDown);
            editor.ui.registry.addIcon("more-drawer", ArrowDown);
          },
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {/* <textarea id="editor"></textarea> */}
      {/* <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: "link image code",
          toolbar: "undo redo | bold italic | alignleft aligncenter alignright | code",
        }}
        // onChange={this.handleEditorChange}
      /> */}
    </RichTextEditorWrapper>
  );
};
