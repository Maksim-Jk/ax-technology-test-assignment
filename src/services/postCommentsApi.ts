import { ref } from "vue";

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export function useComments() {
    const comments = ref<IComment[]>([]);
    const isLoading = ref(false);
    const isError = ref(false);
    const errorMessage = ref<string | null>(null);

    const fetchComments = async (postId: number, authorName?: string) => {
        isLoading.value = true;

        try {
            let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
            if (authorName) {
                url += `?name_like=${authorName}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch comments');
            }
            comments.value = await response.json();
        } catch (error) {
            console.error('Error fetching comments:', error);
            isError.value = true;
            errorMessage.value = error.message;
        } finally {
            isLoading.value = false;
        }
    };

    return { comments, fetchComments, isLoading, isError, error: errorMessage };
}