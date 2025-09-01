"use client";

import { useActionState, startTransition } from "react";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Form,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "@/components/common/form-button";

export default function TopicCreateForm() {
  const [formState, action, isPending] = useActionState(actions.createTopic, {
    errors: {},
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }

  return (
    <Popover placement="left" className="w-full">
      <PopoverTrigger className="w-full">
        <Button
          color="primary"
          className="w-full bg-gradient-orange hover:shadow-glow-orange transition-all duration-300 font-semibold"
          size="lg"
        >
          <span className="flex items-center gap-2">
            <span>+</span>
            Create Topic
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 p-6 w-80 bg-white rounded-xl shadow-elevated">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-6 bg-gradient-orange rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800">Create a Topic</h3>
            </div>

            <Input
              name="name"
              label="Topic Name"
              labelPlacement="outside"
              placeholder="Enter topic name..."
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
              classNames={{
                input: "text-gray-700",
                inputWrapper: "border-custom-border hover:border-reddit-orange focus-within:border-reddit-orange"
              }}
            />

            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="What's this topic about?"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
              classNames={{
                input: "text-gray-700",
                inputWrapper: "border-custom-border hover:border-reddit-orange focus-within:border-reddit-orange"
              }}
              minRows={3}
            />

            {formState.errors._form ? (
              <div className="rounded-lg p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}

            <FormButton
              isLoading={isPending}
              className="bg-gradient-orange hover:shadow-glow-orange transition-all duration-300 font-semibold"
            >
              Create Topic
            </FormButton>
          </div>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
