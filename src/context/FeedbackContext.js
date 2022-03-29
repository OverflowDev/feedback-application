import {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    // Function to set the edit to false as default 
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit:false,
    })

    // Fetching Feedback 
    useEffect(() => {
      fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data)

        setIsLoading(false)
    }


    // Add Feedback 
    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4()
    //     setFeedback([newFeedback, ...feedback])
    // }

    const addFeedback = async (newFeedback) => {

        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    // Delete Feedback 
    // const deleteFeedback = (id) => {
    //     if(window.confirm('Are you sure you want to delete?')){
    //         setFeedback(feedback.filter((item) => item.id !== id))
    //     }
    // }

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){

            await fetch(`/feedback/${id}`, {
                method:'DELETE'
            })

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Edit Feedback 
    // Function that runs when the button is clicked Selecting items to be edited and setting Edit to true
    const editFeedback = (item) => {
        setFeedbackEdit({
            item, 
            edit: true
        })
    }

    // Update Selected Item , this is a function to update
    // const updateFeedback = (id, updItem) => {
    //     setFeedback(
    //         feedback.map( (item) => (item.id === id ? {...item, ...updItem} : item))
    //     )
    // }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(
            feedback.map( (item) => (item.id === id ? {...item, ...data} : item))
        )
    }

    // Edit Feedback Ends 

    return <FeedbackContext.Provider 
        value={{ 
            feedback,
            feedbackEdit,
            isLoading,
            addFeedback,
            deleteFeedback,
            editFeedback,
            updateFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext