import { Transition, Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { CartListSection } from '../CartListSection/CartListSection';
import { CartPriceSection } from '../CartPriceSection/CartPriceSection';
import { CartContianerProps } from './CartContianer.props';

export const CartContainer = ({
  cart,
  cartOpen,
  setCartOpen,
  cartTotal,
  removeCartItem,
  checkOutUrl,
  resetCart,
}: CartContianerProps) => {
  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 selection:bg-pink-400 selection:text-white"
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-grey bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div
                      className={`${
                        cartTotal > 0 ? 'flex-1' : 'grid h-full'
                      } overflow-y-auto py-6 px-4 sm:px-6`}
                    >
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-accent"
                            onClick={() => setCartOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <CartListSection
                        cart={cart}
                        cartTotal={cartTotal}
                        setCartOpen={setCartOpen}
                        removeCartItem={removeCartItem}
                      />
                    </div>
                    <CartPriceSection
                      checkOutUrl={checkOutUrl}
                      cartTotal={cartTotal}
                      setCartOpen={setCartOpen}
                      resetCart={resetCart}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
