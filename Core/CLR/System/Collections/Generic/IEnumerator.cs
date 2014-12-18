using Bridge.CLR;

namespace System.Collections.Generic 
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IEnumerator<T> 
    {
        T Current 
        {
            get;
        }

        bool MoveNext();
    }
}
