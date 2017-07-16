namespace dxDrawLib.Server.Helpers
{
    internal class Helpers
    {

        public static int Clamp( int value, int min, int max ) =>  value <= min ? min : value >= max ? max : value;
        
    }
}